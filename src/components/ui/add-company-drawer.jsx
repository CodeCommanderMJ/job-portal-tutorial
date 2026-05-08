/* eslint-disable react/prop-types */
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "./button";
import { Input } from "./input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import useFetch from "@/hooks/use-fetch";
import { addNewCompany } from "@/api/apiCompanies";
import { BarLoader } from "react-spinners";
import { useEffect } from "react";

const schema = z.object({
  name: z.string().min(1, { message: "Company name is required" }),
  logo: z
    .any()
    .refine(
      (file) =>
        file &&
        file.length > 0 &&
        (file[0].type === "image/png" || file[0].type === "image/jpeg"),
      {
        message: "Only PNG or JPG images are allowed",
      }
    ),
});

const AddCompanyDrawer = ({ fetchCompanies }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
  });

  const {
    loading: loadingAddCompany,
    error: errorAddCompany,
    data: dataAddCompany,
    fn: fnAddCompany,
  } = useFetch(addNewCompany);

  const onSubmit = async (data) => {
    await fnAddCompany({
      name: data.name,
      logo: data.logo[0],
    });
  };

  // After company is added → refresh list & close drawer
  useEffect(() => {
    if (dataAddCompany?.length > 0) {
      fetchCompanies();
      reset();

      // Close Radix drawer programmatically
      document.querySelector("[data-state='open']")?.click();
    }
  }, [dataAddCompany]);

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button type="button" size="sm" variant="secondary">
          Add Company
        </Button>
      </DrawerTrigger>

      {/* 🔥 Z-INDEX FIX FOR CLERK */}
      <DrawerContent className="z-[9999]">
        <DrawerHeader>
          <DrawerTitle>Add a New Company</DrawerTitle>
        </DrawerHeader>

        <form className="flex flex-col gap-3 p-4">
          <Input placeholder="Company name" {...register("name")} />

          <Input
            type="file"
            accept="image/png, image/jpeg"
            {...register("logo")}
          />

          <Button
  variant="destructive"
  className="w-40"
  onClick={() => handleSubmit(onSubmit)()}
>
  Add
</Button>

        </form>

        <DrawerFooter>
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
          {errors.logo && <p className="text-red-500">{errors.logo.message}</p>}
          {errorAddCompany?.message && (
            <p className="text-red-500">{errorAddCompany.message}</p>
          )}
          {loadingAddCompany && <BarLoader width={"100%"} color="#36d7b7" />}

          <DrawerClose asChild>
            <Button variant="secondary">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default AddCompanyDrawer;
