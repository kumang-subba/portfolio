"use client";
import { EmailRequest, EmailValidator } from "@/lib/emailValidator";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { motion } from "framer-motion";
import { Check, Loader2, Send, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import CheckBox from "./Checkbox";

const Contact = () => {
  const [isCompany, setIsCompany] = useState<boolean>(false);
  const [submitSuccess, setSubmitSuccess] = useState<undefined | boolean>(undefined);
  const { handleSubmit, register, formState } = useForm({
    resolver: zodResolver(EmailValidator),
    defaultValues: {
      name: "",
      email: "",
      companyName: undefined,
      message: "",
    },
  });
  const handleFormSubmit = async (data: EmailRequest) => {
    try {
      const payload = EmailValidator.parse(data);
      const res = await axios.post("/api/send", payload);
      if (res.status === 200) {
        setSubmitSuccess(true);
      }
    } catch (error) {
      setSubmitSuccess(false);
      console.log(error);
    }
  };
  useEffect(() => {
    const reset = setTimeout(() => {
      setSubmitSuccess(undefined);
    }, 2000);
    return () => clearTimeout(reset);
  }, [submitSuccess]);
  const isLoading = formState.isSubmitting;
  console.log(submitSuccess);
  return (
    <div className="h-full w-full flex items-center justify-center ">
      <motion.div className="flex rounded-lg ">
        <div
          className={cn(
            "flex flex-col p-4 bg-violet-600 lg:rounded-l-lg rounded-lg lg:w-96 w-full justify-evenly",

            isCompany ? "bg-indigo-600" : "bg-violet-600"
          )}
        >
          <h1 className="text-2xl font-bold">Contact me</h1>
          <p>
            You can contact me directly at{" "}
            <a className="underline" href="mailto:kumangsubba@gmail.com">
              kumangsubba@gmail.com
            </a>{" "}
            or through this form.
          </p>
          <form onSubmit={handleSubmit(handleFormSubmit)}>
            <div className="py-2 flex flex-col gap-4">
              <input
                type="text"
                className={cn(
                  "h-10 px-4 rounded-lg   bg-opacity-80 focus:bg-opacity-100 transition-all outline-none disabled:text-gray-300",
                  isCompany ? "bg-indigo-800" : "bg-violet-800"
                )}
                placeholder="Your name"
                required
                {...register("name")}
                disabled={isLoading}
              />
              <input
                type="email"
                className={cn(
                  "h-10 px-4 rounded-lg bg-opacity-80 focus:bg-opacity-100 transition-all outline-none disabled:text-gray-300",
                  isCompany ? "bg-indigo-800" : "bg-violet-800"
                )}
                placeholder="Your email address"
                required
                {...register("email")}
                disabled={isLoading}
              />
              <CheckBox id="personal" isChecked={isCompany} setIsChecked={setIsCompany}>
                Do you represent a company?
              </CheckBox>
              <motion.input
                type="text"
                className={cn(
                  "h-0 px-4 rounded-lg bg-opacity-80 focus:bg-opacity-100 transition-all outline-none hidden disabled:text-gray-300",
                  isCompany ? "bg-indigo-800" : "bg-violet-800"
                )}
                placeholder="Company name"
                animate={{
                  height: isCompany ? "2.5rem" : 0,
                  display: isCompany ? "block" : "hidden",
                  transition: {
                    type: "inertia",
                  },
                }}
                {...register("companyName")}
                disabled={isLoading}
              />
              <textarea
                className={cn(
                  "h-52 py-3 px-4 rounded-lg bg-opacity-80 focus:bg-opacity-100 transition-all outline-none disabled:text-gray-300",
                  isCompany ? "bg-indigo-800" : "bg-violet-800"
                )}
                placeholder="Your message"
                required
                maxLength={5000}
                {...register("message")}
                disabled={isLoading}
              />
            </div>
            <button
              className={cn(
                "bg-white text-indigo-900 w-full transition-all relative overflow-hidden py-2 px-4 text-center mt-2 rounded-lg font-semibold flex items-center justify-center gap-2 hover:text-white disabled:hover:text-gray-300 disabled:text-indigo-700",
                isCompany ? "hover:bg-indigo-800" : "hover:bg-violet-800"
              )}
              disabled={isLoading}
            >
              {submitSuccess === undefined && "Send"}
              {isLoading ? (
                <Loader2 className="h-6 w-6 animate-spin" />
              ) : submitSuccess === undefined ? (
                <Send className="h-6 w-6 group-hover:text-white" />
              ) : submitSuccess === true ? (
                <Check className="h-6 w-6" />
              ) : (
                <span className="flex gap-1">
                  Error, Try Again
                  <X className="h-6 w-6" />
                </span>
              )}
            </button>
          </form>
        </div>
        <motion.div
          className="bg-purple-800 relative overflow-hidden hidden lg:block"
          initial={false}
          animate={{
            height: isCompany ? 700 : 600,
            width: isCompany ? 700 : 600,
            transition: {
              type: "spring",
            },
          }}
        >
          <motion.div
            className="flex w-full h-full"
            animate={{
              translateX: isCompany ? "-100%" : "0%",
            }}
          >
            <motion.div
              style={{
                backgroundImage: "url(/personal.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className="aspect-auto w-full shrink-0 bg-neutral-800 object-cover"
            />
            <motion.div
              style={{
                backgroundImage: "url(/work.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className="aspect-auto w-full shrink-0 bg-neutral-800 object-cover"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Contact;
