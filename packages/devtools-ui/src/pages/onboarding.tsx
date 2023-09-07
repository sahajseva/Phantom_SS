import clsx from "clsx";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "src/components/button";
import { LogoIcon } from "src/components/icons/logo";
import { Input } from "src/components/input";

const inputs = [
    {
        name: "name",
        label: "Your name",
        required: true,
        placeholder: "Enter your name",
    },
    {
        name: "title",
        label: "Job title",
        required: true,
        placeholder: "Please enter your job title",
    },
    {
        name: "company",
        label: "Company name",
        required: true,
        placeholder: "Enter your company name",
    },
] as const;

const links = [
    {
        name: "Privacy Policy",
        url: "https://www.google.com",
    },
    {
        name: "Terms and conditions",
        url: "https://www.google.com",
    },
];

export const Onboarding = () => {
    const [values, setValues] = React.useState({
        name: "",
        title: "",
        company: "",
    });

    const navigate = useNavigate();

    return (
        <div
            className={clsx(
                "re-flex",
                "re-items-center",
                "re-justify-center",
                "re-h-auto",
                "re-py-16",
            )}
        >
            <div
                className={clsx(
                    "re-flex-1",
                    "re-flex",
                    "re-items-center",
                    "re-justify-center",
                    "re-h-full",
                )}
            >
                <div
                    className={clsx(
                        "re-max-w-[336px]",
                        "re-w-full",
                        "re-flex",
                        "re-flex-col",
                        "re-gap-16",
                        "re-justify-center",
                        "re-items-center",
                    )}
                >
                    <LogoIcon height={80} width={336} />
                    <div
                        className={clsx(
                            "re-flex",
                            "re-flex-col",
                            "re-items-center",
                            "re-justify-center",
                            "re-gap-6",
                            "re-w-full",
                        )}
                    >
                        {inputs.map(
                            ({ name, label, required, placeholder }) => (
                                <Input
                                    key={name}
                                    label={label}
                                    required={required}
                                    placeholder={placeholder}
                                    value={values[name]}
                                    onChange={(value) =>
                                        setValues((prev) => ({
                                            ...prev,
                                            [name]: value,
                                        }))
                                    }
                                    className="re-w-full"
                                />
                            ),
                        )}
                        <div
                            className={clsx(
                                "re-w-full",
                                "re-flex",
                                "re-items-center",
                                "re-justify-end",
                            )}
                        >
                            <Button
                                onClick={() => {
                                    navigate("/");
                                }}
                            >
                                Continue
                            </Button>
                        </div>
                    </div>
                    <div
                        className={clsx(
                            "re-flex",
                            "re-items-center",
                            "re-justify-between",
                            "re-w-full",
                        )}
                    >
                        {links.map((link) => (
                            <a
                                key={link.name}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={clsx(
                                    "re-text-gray-500",
                                    "re-underline",
                                    "re-text-xs",
                                )}
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
