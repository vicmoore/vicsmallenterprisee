import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/common/desktop/Button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/common/desktop/Form';
import { Input } from '@/components/common/desktop/Input';

const formSchema = z.object({
  firstname: z.string().min(2, {
    message: '',
  }),
  lastname: z.string().min(2, {
    message: '',
  }),
  country: z.string().min(4, {
    message: '',
  }),
  state: z.string().min(4, {
    message: '',
  }),
  city: z.string().min(4, {
    message: '',
  }),
  address: z.string().min(8, {
    message: '',
  }),
  phoneNumber: z.string().min(8, {
    message: '',
  }),
  email: z.string().min(12, {
    message: '',
  }),
});

export function AddressForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstname: '',
      lastname: '',
      country: '',
      state: '',
      city: '',
      address: '',
      phoneNumber: '',
      email: '',
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <span className="flex flex-col gap-y-[31px] ">
          <FormField
            control={form.control}
            name="firstname"
            render={({ field }) => (
              <FormItem className="flex-grow">
                <FormLabel className="font-inter font-medium">
                  First Name
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder=""
                    className="bg-[#EFEFEF] focus-visible:outline-0 font-medium"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastname"
            render={({ field }) => (
              <FormItem className="flex-grow">
                <FormLabel className="font-inter font-medium">
                  Last Name
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder=""
                    className="bg-[#EFEFEF] focus-visible:outline-0 font-medium"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </span>
        <span className="flex flex-col gap-y-[31px]">
          <FormField
            control={form.control}
            name="country"
            render={({ field }) => (
              <FormItem className="flex-grow">
                <FormLabel className="font-inter font-medium">
                  Country
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder=""
                    className="bg-[#EFEFEF] focus-visible:outline-0 font-medium"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="state"
            render={({ field }) => (
              <FormItem className="flex-grow">
                <FormLabel className="font-inter font-medium">State</FormLabel>
                <FormControl>
                  <Input
                    placeholder=""
                    className="bg-[#EFEFEF] focus-visible:outline-0 font-medium"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </span>
        <span className="flex flex-col gap-y-[31px]">
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem className="flex-grow">
                <FormLabel className="font-inter font-medium">City</FormLabel>
                <FormControl>
                  <Input
                    placeholder=""
                    className="bg-[#EFEFEF] focus-visible:outline-0 font-medium"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem className="flex-grow">
                <FormLabel className="font-inter font-medium">
                  Street Address
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder=""
                    className="bg-[#EFEFEF] focus-visible:outline-0 font-medium"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </span>
        <span className="flex flex-col gap-y-[31px]">
          <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem className="flex-grow">
                <FormLabel className="font-inter font-medium">
                  Phone Number
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder=""
                    className="bg-[#EFEFEF] focus-visible:outline-0 font-medium"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="flex-grow">
                <FormLabel className="font-inter font-medium">Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder=""
                    className="bg-[#EFEFEF] focus-visible:outline-0 font-medium"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </span>
        <Button
          type="submit"
          className="w-full font-poppins font-semibold border border-brand-blue bg-white text-brand-blue hover:text-white hover:bg-brand-blue">
          Add Address
        </Button>
      </form>
    </Form>
  );
}
