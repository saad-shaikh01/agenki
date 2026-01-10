import { companyConstant } from "@/lib/utils";
import { useState } from "react";

interface FormData {
  [key: string]: string;
}

const useFormHandler = () => {
  const [formData, setFormData] = useState<FormData>({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const submitDetail = {
        ...formData,
        fullPageUrl: window.location.href,
        companyName: companyConstant.CompanyName, // Replace with your constant
      };

      const response = await fetch(companyConstant.ApiEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submitDetail),
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log("API response:", responseData);
        window.location.href = `${companyConstant.CompanyUrlWithHHTPS}`; // Redirect to thank you page
      } else {
        setError("Failed to submit the form. Please try again.");
      }
    } catch (err) {
      setError("An unexpected error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return {
    formData,
    handleChange,
    handleSubmit,
    loading,
    error,
  };
};

export default useFormHandler;
