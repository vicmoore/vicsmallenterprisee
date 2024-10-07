import { Link } from 'react-router-dom';
import { File, ListFilter, PlusCircle } from 'lucide-react';

import { Button } from '@/components/common/desktop/Button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/common/desktop/Card';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/common/desktop/DropdownMenu';
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/common/desktop/Table';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/common/desktop/Tabs';

import { VendorPageWrapper } from '@/components/vendor/VendorPageWrapper';
import Product from '@/components/vendor/Product';
import NoProducts from '@/pages/vendor/desktop/products/NoProducts';

import ShoeImage from '@/assets/images/shoe.png';

export function ViewProducts() {
  // const products = true;
  const products = [
    {
      image: ShoeImage,
      name: 'laser lemonade machine',
      status: 'active',
      price: '499.99',
      totalSales: 25,
      createdAt: '2023-07-12 10:42 AM',
    },
    {
      image: ShoeImage,
      name: 'hypernova headphones',
      status: 'active',
      price: '129.99',
      totalSales: 100,
      createdAt: '2023-10-18 03:21 PM',
    },
    {
      image: ShoeImage,
      name: 'aeroGlow desk lamp',
      status: 'active',
      price: '39.99',
      totalSales: 50,
      createdAt: '2023-11-29 08:15 AM',
    },
    {
      image: ShoeImage,
      name: 'techTonic energy drink',
      status: 'draft',
      price: '2.99',
      totalSales: 5,
      createdAt: '2023-12-25 11:59 PM',
    },
    {
      image: ShoeImage,
      name: 'gamer gear pro controller',
      status: 'active',
      price: '59.99',
      totalSales: 75,
      createdAt: '2024-01-01 12:00 AM',
    },
    {
      image: ShoeImage,
      name: 'luminous vR headset',
      status: 'draft',
      price: '199.99',
      totalSales: 30,
      createdAt: '2024-02-14 02:14 PM',
    },
  ];

  return (
    <VendorPageWrapper>
      {products ? (
        <>
          <Tabs defaultValue="all">
            <div className="flex items-center">
              <TabsList>
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="active">Active</TabsTrigger>
                <TabsTrigger value="draft">Draft</TabsTrigger>
                <TabsTrigger value="archived" className="hidden sm:flex">
                  Archived
                </TabsTrigger>
              </TabsList>
              <div className="ml-auto flex items-center gap-2">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm" className="h-8 gap-1">
                      <ListFilter className="h-3.5 w-3.5" />
                      <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                        Filter
                      </span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuCheckboxItem checked>
                      Active
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>Draft</DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>
                      Archived
                    </DropdownMenuCheckboxItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <Button size="sm" variant="outline" className="h-8 gap-1">
                  <File className="h-3.5 w-3.5" />
                  <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                    Export
                  </span>
                </Button>
                <Button size="sm" className="h-8 gap-1">
                  <PlusCircle className="h-3.5 w-3.5" />
                  <Link
                    to={'create'}
                    className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                    Add Product
                  </Link>
                </Button>
              </div>
            </div>
            <TabsContent value="all">
              <Card x-chunk="dashboard-06-chunk-0">
                <CardHeader>
                  <CardTitle>Products</CardTitle>
                  <CardDescription>
                    Manage your products and view their sales performance.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="hidden w-[100px] sm:table-cell">
                          <span className="sr-only">Image</span>
                        </TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="hidden md:table-cell">
                          Price
                        </TableHead>
                        <TableHead className="hidden md:table-cell">
                          Total Sales
                        </TableHead>
                        <TableHead className="hidden md:table-cell">
                          Created at
                        </TableHead>
                        <TableHead>
                          <span className="sr-only">Actions</span>
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {products.map((product, index) => (
                        <Product key={index} product={product} />
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
                <CardFooter>
                  <div className="text-xs text-muted-foreground">
                    Showing <strong>1-10</strong> of <strong>32</strong>{' '}
                    products
                  </div>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </>
      ) : (
        <NoProducts />
      )}
    </VendorPageWrapper>
  );
}

export default ViewProducts;
