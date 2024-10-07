import { useEffect, useState } from 'react';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from '@/components/common/desktop/BreadCrumbs';
import { Link } from 'react-router-dom';
import { Input } from '@/components/common/desktop/Input';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from '@/components/common/desktop/DropdownMenu';
import { Button } from '@/components/common/desktop/Button';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from '@/components/common/desktop/Card';
import { Label } from '@/components/common/desktop/Label';
import { Textarea } from '@/components/common/desktop/Textarea';

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/common/desktop/Select';
import { SVGProps } from 'react';
import { JSX } from 'react/jsx-runtime';
import { TrashIcon, UserRound } from 'lucide-react';

import { useToast } from '@/components/hooks/useToast';
import { databases, storage } from '@/appwriteconfig';
import { ID } from 'appwrite';

const CreateProduct = () => {
  const [variants, setVariants] = useState<
    { variation: string; price: string; quantity: string; sku: string }[]
  >([{ variation: '', price: '', quantity: '', sku: '' }]);

  /**
   * Adds a new variant to the variants array.
   * @remarks
   * This function is called when the user clicks the "Add Variant" button.
   * It creates a new array by spreading the variants array, then adds a new variant with empty properties to the end of the array.
   * The new array is then set as the new variants state and the product state is updated with the new variants.
   */
  const handleAddVariant = () => {
    setVariants([
      ...variants,
      { variation: '', price: '', quantity: '', sku: '' },
    ]);
  };

  /**
   * Handles the change of a variant.
   * @param index number - the index of the variant that is being changed
   * @param event any - the event that triggered the change
   * @remarks
   * This function creates a new array by spreading the variants array, then updates the variant at the index with the value from the event target.
   * The new array is then set as the new variants state and the product state is updated with the new variants.
   */
  const handleVariantChange = (index: number, event: any) => {
    const updatedVariants = [...variants];
    // @ts-ignore
    updatedVariants[index][event.target.name] = event.target.value;
    setVariants(updatedVariants);
    setProduct({
      ...product,
      variants: updatedVariants,
    });
  };

  /**
   * Handles the deletion of a variant.
   * @param index number - the index of the variant to be deleted
   * @remarks
   * This function creates a new array by spreading the variants array, then removes the variant at the index using the splice method.
   * The new array is then set as the new variants state and the product state is updated with the new variants.
   */
  const handleDeleteVariant = (index: number) => {
    const updatedVariants = [...variants];
    updatedVariants.splice(index, 1);
    setVariants(updatedVariants);
  };

  const [, setIsLoading] = useState(false);

  const { toast } = useToast();

  const showToast = (title: string, description: string) => {
    toast({
      title: title,
      description: description,
    });
  };

  const [product, setProduct] = useState({
    name: '',
    description: '',
    category: '',
    price: '',
    variants: [
      {
        variation: '',
        sku: '',
        quantity: '',
        price: '',
      },
    ],
    images: [] as File[],
  });

  const [images, setImages] = useState<string[] | null>([]);

  type Variant = {
    variation: string;
    sku: string;
    quantity: string;
    price: string;
  };
  type Product = {
    id?: string;
    name: string;
    description: string;
    category: string;
    variants: Variant[];
    images: File[];
  };

  /**
   * Handles image upload by user.
   * @param event React.ChangeEvent<HTMLInputElement> - the event containing the uploaded images
   * @remarks
   * This function gets the uploaded images from the event and converts them to URLs.
   * It then adds the URLs to the images state and updates the product state with the new
   * images (uploadedImgs).
   */
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedImgs = event.target.files;
    if (uploadedImgs) {
      const imgUrls = Array.from(uploadedImgs).map((img) =>
        URL.createObjectURL(img)
      );
      images?.push(...imgUrls);
      setImages(images);

      const productImages = Array.from(uploadedImgs);

      setProduct({
        ...product,
        images: [...productImages],
      });
      console.log('Product Images', productImages);
    }
  };
  useEffect(() => {
    console.log('Product', product);
  }, [product]);
  /**
   * Deletes an image from the images state and product state at the given index.
   * @param index number - the index of the image to delete
   * @remarks
   * This function makes a shallow copy of the images state and splices the image at the given index.
   * It then updates the images state with the new array and updates the product state with the new images.
   */
  const handleDeleteImage = (index: number) => {
    const updatedImages = [...(images ?? [])];
    updatedImages.splice(index, 1);
    setImages(updatedImages);
  };

  const handlePostProduct = async (
    e: { preventDefault: () => void },
    product: Product,
    setIsLoading: (isLoading: boolean) => void,
    showToast: (title: string, message: string) => void
  ) => {
    const images: string[] = [];
    e.preventDefault();
    //show load spinner
    setIsLoading(true);

    //store product images in appwrite storage
    product.images.forEach(async (image) => {
      const response = await storage.createFile(
        import.meta.env.VITE_BUCKET_ID,
        ID.unique(),
        image
      );

      //convert photo to url
      const photoURL = await storage.getFileView(
        import.meta.env.VITE_BUCKET_ID,
        response.$id
      ).href;
      images.push(photoURL);
    });

    if (product.description.length > 1000) {
      showToast('Error', 'Description must be less than 1000 characters');

      setIsLoading(false);
      return;
    }
    //save product details to appwrite db
    const promise = databases.createDocument(
      import.meta.env.VITE_DATABASE_ID,
      import.meta.env.VITE_PRODUCT_COLLECTION_ID,
      ID.unique(),
      {
        ...product,
        variants: JSON.stringify(product.variants),
        //add photourl to appwrite db
        images: images,
        seller_id: '66f6b90c003d77558793',
      }
    );

    console.log('Payload:', {
      ...product,
      variants: JSON.stringify(product.variants),
      seller_id: '66f6b90c003d77558793',
      Document_ID: ID.unique(),
    });

    promise.then(
      function (_response) {
        setTimeout(() => {
          //redirect to dashboard after 5000 milliseconds
          window.location.href = '/vendor/products';
        }, 5000);

        showToast(
          'Product created successfully',
          'The product has been created successfully. You will be redirected to the dashboard in 5 seconds'
        );
      },
      function (error) {
        showToast('Error', error.message);
        console.error('Error creating document:', error);
      }
    );

    //hide load spinner
    setIsLoading(false);
  };

  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
          <Breadcrumb className="hidden md:flex">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="..">Dashboard</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to={'../products'} className="cursor-pointer">
                    Products
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Create Product</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <div className="relative ml-auto flex-1 md:grow-0">
            <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search..."
              className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
            />
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="overflow-hidden rounded-full">
                <UserRound />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          <div className="mx-auto grid max-w-[59rem] flex-1 auto-rows-max gap-4">
            <div className="flex items-center gap-4">
              <Button variant="outline" size="icon" className="h-7 w-7">
                <ChevronLeftIcon className="h-4 w-4" />
                <span className="sr-only">Back</span>
              </Button>

              <div className="hidden items-center gap-2 md:ml-auto md:flex">
                <Button variant="outline" size="sm">
                  Discard
                </Button>
                <Button
                  size="sm"
                  onClick={(e) =>
                    handlePostProduct(e, product, setIsLoading, showToast)
                  }>
                  Create Product
                </Button>
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">
              <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
                <Card x-chunk="dashboard-07-chunk-0">
                  <CardHeader>
                    <CardTitle>Product Details</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-6">
                      <div className="grid gap-3">
                        <Label htmlFor="name">Name</Label>
                        <Input
                          id="name"
                          type="text"
                          className="w-full border"
                          onChange={(e) => {
                            setProduct({
                              ...product,
                              name: e.target.value,
                            });
                          }}
                        />
                      </div>
                      <div className="grid gap-3">
                        <Label htmlFor="description">Description</Label>
                        <Textarea
                          id="description"
                          onChange={(e) => {
                            setProduct({
                              ...product,
                              description: e.target.value,
                            });
                          }}
                          className="min-h-32"
                        />
                      </div>
                      <div className="grid gap-3">
                        <Label htmlFor="price">Price</Label>
                        <Input
                          id="price"
                          name="price"
                          type="number"
                          className="w-1/4 border"
                          onChange={(e) => {
                            setProduct({
                              ...product,
                              price: e.target.value,
                            });
                          }}
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card x-chunk="dashboard-07-chunk-2">
                  <CardHeader>
                    <CardTitle>Product Category</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-6 sm:grid-cols-3">
                      <div className="grid gap-3">
                        <Label htmlFor="category">Category</Label>
                        <Select
                          onValueChange={(value) => {
                            setProduct({
                              ...product,
                              category: value,
                            });
                          }}>
                          <SelectTrigger
                            id="category"
                            aria-label="Select category">
                            <SelectValue placeholder="Select category" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="clothing">Clothing</SelectItem>
                            <SelectItem value="electronics">
                              Electronics
                            </SelectItem>
                            <SelectItem value="accessories">
                              Accessories
                            </SelectItem>
                            <SelectItem value="sports">Sports</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card x-chunk="dashboard-07-chunk-1">
                  <CardHeader>
                    <CardTitle>Variants</CardTitle>
                  </CardHeader>
                  <CardContent className="grid gap-6">
                    {variants.map((_, index) => (
                      <div className="grid grid-cols-6 gap-6" key={index}>
                        <div className="grid gap-3 col-span-6">
                          <Label>Variation</Label>
                          <Input
                            id="variation"
                            name="variation"
                            type="text"
                            className="border"
                            onChange={(e) => handleVariantChange(index, e)}
                            value={variants?.[index]?.variation}
                          />
                        </div>
                        <div className="grid gap-3 col-span-2">
                          <Label>SKU</Label>
                          <Input
                            id="sku"
                            name="sku"
                            type="text"
                            className="border"
                            onChange={(e) => handleVariantChange(index, e)}
                            value={variants?.[index]?.sku}
                          />
                        </div>
                        <div className="grid gap-3 col-span-2">
                          <Label>Quantity</Label>
                          <Input
                            id="quantity"
                            name="quantity"
                            type="text"
                            className="border"
                            onChange={(e) => handleVariantChange(index, e)}
                            value={variants?.[index]?.quantity}
                          />
                        </div>
                        <div className="grid gap-3 col-span-2">
                          <Label>Price</Label>
                          <Input
                            id="price"
                            name="price"
                            type="number"
                            className="border"
                            onChange={(e) => handleVariantChange(index, e)}
                            value={variants?.[index]?.price}
                          />
                        </div>
                        {variants.length === 1 ? null : (
                          <div
                            className="text-red-600 flex items-center justify-center gap-1 cursor-pointer"
                            onClick={() => handleDeleteVariant(index)}>
                            <TrashIcon className="h-4 w-4" />
                            <p className="text-sm font-medium leading-none">
                              Delete
                            </p>
                          </div>
                        )}
                      </div>
                    ))}
                  </CardContent>
                  <CardFooter className="justify-center border-t p-4">
                    <Button
                      size="sm"
                      variant="ghost"
                      className="gap-1"
                      onClick={handleAddVariant}>
                      <CirclePlusIcon className="h-3.5 w-3.5" />
                      Add Variant
                    </Button>
                  </CardFooter>
                </Card>
              </div>
              <div className="grid auto-rows-max items-start gap-4 lg:gap-8">
                <Card
                  className="overflow-hidden"
                  x-chunk="dashboard-07-chunk-4">
                  <CardHeader>
                    <CardTitle>Product Images</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-3 gap-2">
                      {images &&
                        images.map((imgUrl, index) => (
                          <div
                            key={index}
                            className={`relative ${
                              index === 0 ? 'col-span-3' : ''
                            }`}>
                            <span
                              onClick={() => handleDeleteImage(index)}
                              className="absolute top-2 right-2 h-[40px] w-[40px] bg-black text-white rounded-full flex items-center justify-center cursor-pointer">
                              <TrashIcon />
                            </span>
                            {index === 0 ? (
                              <>
                                <img
                                  alt="Product image"
                                  className="aspect-square w-full rounded-md object-cover"
                                  height="300"
                                  src={imgUrl}
                                  width="300"
                                  key={index}
                                />
                              </>
                            ) : (
                              <img
                                alt="Product image"
                                className="aspect-square w-full rounded-md object-cover"
                                height="84"
                                src={imgUrl}
                                width="84"
                                key={index}
                              />
                            )}
                          </div>
                        ))}
                      <div className="relative">
                        <button className="flex aspect-square w-full items-center justify-center rounded-md border border-dashed">
                          <UploadIcon className="h-4 w-4 text-muted-foreground" />
                          <span className="sr-only">Upload</span>
                        </button>
                        <input
                          type="file"
                          name="file-input"
                          accept="image/*"
                          multiple
                          onChange={handleImageUpload}
                          className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            <div className="flex items-center justify-center gap-2 md:hidden">
              <Button variant="outline" size="sm">
                Discard
              </Button>
              <Button size="sm">Create Product</Button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default CreateProduct;

function ChevronLeftIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

function CirclePlusIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M8 12h8" />
      <path d="M12 8v8" />
    </svg>
  );
}

function SearchIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function UploadIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="17 8 12 3 7 8" />
      <line x1="12" x2="12" y1="3" y2="15" />
    </svg>
  );
}
