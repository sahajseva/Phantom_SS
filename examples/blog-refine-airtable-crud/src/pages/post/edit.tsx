import { useForm } from "@pankod/refine-react-hook-form";
import React from "react";

export const PostEdit: React.FC = () => {
    const {
        refineCore: { onFinish, formLoading },
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    return (
        <div className="container mx-auto">
            <br />
            <form onSubmit={handleSubmit(onFinish)}>
                <div className="mb-6">
                    <label
                        htmlFor="Name"
                        className="mb-2 block text-sm font-medium"
                    >
                        Name
                    </label>
                    <input
                        {...register("Name", { required: true })}
                        type="text"
                        id="Name"
                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm"
                        placeholder="Name"
                    />
                    {errors.title && (
                        <p className="mt-1 text-sm text-red-600">
                            <span className="font-medium">Oops!</span> This
                            field is required
                        </p>
                    )}
                </div>

                <div className="mb-6">
                    <label
                        htmlFor="title"
                        className="mb-2 block text-sm font-medium"
                    >
                        Title
                    </label>
                    <input
                        {...register("title", { required: true })}
                        type="text"
                        id="title"
                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm "
                        placeholder="Title"
                    />
                    {errors.title && (
                        <p className="mt-1 text-sm text-red-600">
                            <span className="font-medium">Oops!</span> This
                            field is required
                        </p>
                    )}
                </div>

                <div className="mb-6">
                    <label
                        htmlFor="content"
                        className="mb-2 block text-sm font-medium"
                    >
                        Content
                    </label>
                    <textarea
                        {...register("content", { required: true })}
                        id="content"
                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm "
                        placeholder="Content"
                        rows={10}
                    />
                    {errors.content && (
                        <p className="mt-1 text-sm text-red-600">
                            <span className="font-medium">Oops!</span> This
                            field is required
                        </p>
                    )}
                </div>

                <div className="mb-6">
                    <label
                        htmlFor="category"
                        className="mb-2 block text-sm font-medium"
                    >
                        Category
                    </label>

                    <select
                        defaultValue={""}
                        {...register("category", { required: true })}
                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm"
                    >
                        <option value={""} disabled>
                            Please select
                        </option>
                        <option value="Information Technology">
                            Information Technology
                        </option>
                        <option value="Fun">Fun</option>
                        <option value="Drama">Drama</option>
                    </select>

                    {errors.category && (
                        <p className="mt-1 text-sm text-red-600">
                            <span className="font-medium">Oops!</span> This
                            field is required
                        </p>
                    )}
                </div>

                <div className="mb-6">
                    <label
                        htmlFor="status"
                        className="mb-2 block text-sm font-medium"
                    >
                        Status
                    </label>
                    <select
                        {...register("Status")}
                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm"
                    >
                        <option value="published">published</option>
                        <option value="draft">draft</option>
                        <option value="rejected">rejected</option>
                    </select>
                </div>

                <button
                    type="submit"
                    className="flex w-full items-center rounded-lg bg-indigo-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-indigo-600 sm:w-auto"
                >
                    {formLoading ? "loading..." : <span>Save</span>}
                </button>
            </form>
        </div>
    );
};
