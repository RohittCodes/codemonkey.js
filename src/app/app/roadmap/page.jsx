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
    <div className="h-full w-full flex flex-col">
      <div className="px-4 py-2 border border-border w-[152px] rounded-full">
        Get Started ✨
      </div>
      <div className="flex-1 mt-2 border border-border rounded-lg py-6 px-4">
        <div className="flex flex-col items-center">
          <span className="text-2xl font-semibold">
            Let&apos;s get started by creating your Developer Roadmap first
          </span>
          <span className="text-base text-muted-foreground">
            (You can always search for new roadmaps later (under development),
            but the initial roadmap will be helpful to get started with study
            plan)
          </span>
        </div>
        <div className="w-full h-[1px] mt-4 bg-border" />
        <div className="flex flex-row items-center mt-4">
          <AreaOfInterest />
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-1/2 flex justify-center flex-col"
            >
              {index === 0 && (
                <div className="flex flex-col gap-4">
                  <FormField
                    control={form.control}
                    name="skillLevel"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Skill Level</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Skill Level"
                            {...field}
                            onChange={(e) => {
                              field.onChange(e), setSkillLevel(e.target.value);
                            }}
                          />
                        </FormControl>
                        <FormDescription className="flex flex-col gap-1">
                          <span className="font-bold">
                            What is your current skill level?
                          </span>
                          <span className="text-sm text-muted-foreground">
                            You can write your current skill level here. For
                            example, Beginner, Intermediate, Advanced.
                          </span>
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button onClick={handleNext}>Next</Button>
                </div>
              )}
              {index === 1 && (
                <div className="flex flex-col gap-4">
                  <FormField
                    control={form.control}
                    name="careerGoal"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Career Goal</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Career Goal"
                            {...field}
                            onChange={(e) => {
                              field.onChange(e), setCareerGoal(e.target.value);
                            }}
                          />
                        </FormControl>
                        <FormDescription className="flex flex-col gap-1">
                          <span className="font-bold">
                            What is your career goal?
                          </span>
                          <span className="text-sm text-muted-foreground">
                            You can write your career goal here. For example,
                            Full Stack Developer, Data Scientist, etc.
                          </span>
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="flex flex-row justify-between w-full gap-2">
                    <Button onClick={handleBack} className="w-full">
                      Back
                    </Button>
                    <Button onClick={handleNext} className="w-full">
                      Next
                    </Button>
                  </div>
                </div>
              )}
              {index === 2 && (
                <div className="flex flex-col gap-4">
                  <FormField
                    control={form.control}
                    name="projectType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Project Type</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Project Type"
                            {...field}
                            onChange={(e) => {
                              field.onChange(e), setProjectType(e.target.value);
                            }}
                          />
                        </FormControl>
                        <FormDescription className="flex flex-col gap-1">
                          <span className="font-bold">
                            What type of projects do you want to work on?
                          </span>
                          <span className="text-sm text-muted-foreground">
                            You can write the type of projects you want to work
                            on. For example, Web Development, Data Analysis,
                            etc.
                          </span>
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="flex flex-row justify-between w-full gap-2">
                    <Button onClick={handleBack} className="w-full">
                      Back
                    </Button>
                    <Button onClick={handleNext} className="w-full">
                      Next
                    </Button>
                  </div>
                </div>
              )}
              {index === 3 && (
                <div className="flex flex-col gap-4">
                  <FormField
                    control={form.control}
                    name="skillType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Skill Type</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Skill Type"
                            {...field}
                            onChange={(e) => {
                              field.onChange(e), setSkillType(e.target.value);
                            }}
                          />
                        </FormControl>
                        <FormDescription className="flex flex-col gap-1">
                          <span className="font-bold">
                            What type of skills do you want to learn?
                          </span>
                          <span className="text-sm text-muted-foreground">
                            You can write the type of skills you want to learn.
                            For example, Frontend Development, Data Analysis,
                            etc.
                          </span>
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="flex flex-row justify-between w-full gap-2">
                    <Button onClick={handleBack} className="w-full">
                      Back
                    </Button>
                    <Button onClick={handleNext} className="w-full">
                      Next
                    </Button>
                  </div>
                </div>
              )}
              {index === 4 && (
                <div className="flex flex-col gap-4">
                  <FormField
                    control={form.control}
                    name="timeCommitment"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Time Commitment</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Time Commitment"
                            {...field}
                            onChange={(e) => {
                              field.onChange(e),
                                setTimeCommitment(e.target.value);
                            }}
                          />
                        </FormControl>
                        <FormDescription className="flex flex-col gap-1">
                          <span className="font-bold">
                            How much time can you commit daily?
                          </span>
                          <span className="text-sm text-muted-foreground">
                            You can write the time you can commit daily. For
                            example, 1 hour, 2 hours, etc.
                          </span>
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="flex flex-row justify-between w-full gap-2">
                    <Button onClick={handleBack} className="w-full">
                      Back
                    </Button>
                    <Button onClick={handleNext} className="w-full">
                      Next
                    </Button>
                  </div>
                </div>
              )}
              {index === 5 && (
                <div className="flex flex-col gap-4">
                  <FormField
                    control={form.control}
                    name="learningPace"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Learning Pace</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Learning Pace"
                            {...field}
                            onChange={(e) => {
                              field.onChange(e),
                                setLearningPace(e.target.value);
                            }}
                          />
                        </FormControl>
                        <FormDescription className="flex flex-col gap-1">
                          <span className="font-bold">
                            What is your learning pace?
                          </span>
                          <span className="text-sm text-muted-foreground">
                            You can write your learning pace here. For example,
                            Fast, Medium, Slow.
                          </span>
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="flex flex-row justify-between w-full gap-2">
                    <Button onClick={handleBack} className="w-full">
                      Back
                    </Button>
                    <Button onClick={handleNext} className="w-full">
                      Next
                    </Button>
                  </div>
                </div>
              )}
              {index === 6 && (
                <div className="flex flex-col gap-4">
                  <FormField
                    control={form.control}
                    name="resources"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Resources</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Resources"
                            {...field}
                            onChange={(e) => {
                              field.onChange(e), setResources(e.target.value);
                            }}
                          />
                        </FormControl>
                        <FormDescription className="flex flex-col gap-1">
                          <span className="font-bold">
                            What resources do you have?
                          </span>
                          <span className="text-sm text-muted-foreground">
                            You can write the resources you have. For example,
                            Online Courses, Books, etc.
                          </span>
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="flex flex-row justify-between w-full gap-2">
                    <Button onClick={handleBack} className="w-full">
                      Back
                    </Button>
                    <Button type="submit" className="w-full">
                      Submit
                    </Button>
                  </div>
                </div>
              )}
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default RoadmapPage;
