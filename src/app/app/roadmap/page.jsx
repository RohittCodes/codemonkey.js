"use client";

import { useForm } from "react-hook-form";
import AreaOfInterest from "./_components/interest-area";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const RoadmapPage = () => {
  const [data, setData] = useState({});

  const [areaOfInterest, setAreaOfInterest] = useState([]);
  const [skillLevel, setSkillLevel] = useState("");
  const [careerGoal, setCareerGoal] = useState("");
  const [projectType, setProjectType] = useState("");
  const [skillType, setSkillType] = useState("");
  const [timeCommitment, setTimeCommitment] = useState("");
  const [learningPace, setLearningPace] = useState("");
  const [resources, setResources] = useState("");

  const [index, setIndex] = useState(0);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const { toast } = useToast();

  const router = useRouter();

  // zod implementation
  const form = useForm();

  const handleNext = () => {
    setIndex((prev) => prev + 1);
  };

  const handleBack = () => {
    setIndex((prev) => prev - 1);
  };

  // function to change the string into array of strings, It changes the string from , separation and removes the spaces
  // It is used in the function onSubmit to change the string into array of strings

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setData({
      areaOfInterest: areaOfInterest,
      skillLevel: skillLevel,
      careerGoal: careerGoal,
      projectType: projectType,
      skillType: skillType,
      timeCommitment: timeCommitment,
      learningPace: learningPace,
      resources: resources,
    });
    try {
      // const response = await fetch("/api/roadmap", {
      //   method: "POST",
      //   body: JSON.stringify(data),
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      // });
      toast({
        title: "Roadmap created successfully",
        // description: response.data.message,
        variant: "default",
      });
      router.replace("/app/plan");
    } catch (error) {
      toast({
        title: "Failed to create roadmap",
        // description: response.data.message,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen text-3xl font-semibold text-gray-500">
      Under Development 👷🚧
    </div>
  );
};

export default RoadmapPage;
