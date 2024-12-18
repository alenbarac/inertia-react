import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm, router, Link } from "@inertiajs/react";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Create({ classes, auth }) {
    const [sections, setSections] = useState([]);
    const { data, setData, post, processing, errors } = useForm({
        name: "",
        email: "",
        class_id: "",
        section_id: "",
    });

    useEffect(() => {
        if (data.class_id) {
            axios
                .get(route("sections.index", { class_id: data.class_id }))
                .then((response) => {
                    setSections(response.data.data);
                });
        }
    }, [data.class_id]);

    function submit(e) {
        e.preventDefault();
        post(route("students.store"));
    }

    console.log("classes", classes);
    console.log("sections", sections);

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Add Student
                </h2>
            }
        >
            <Head title="Add Student">
                <meta name="description" content="Students Index" />
            </Head>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-3">
                    <div className="sm:flex sm:items-center">
                        <div className="sm:flex-auto"></div>

                        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                            <a
                                href=""
                                className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
                            >
                                Back
                            </a>
                        </div>
                    </div>

                    <div className="lg:grid lg:grid-cols-12 lg:gap-x-5">
                        <div className="space-y-6 sm:px-6 lg:px-0 lg:col-span-12">
                            <form onSubmit={submit}>
                                <div className="shadow sm:rounded-md sm:overflow-hidden">
                                    <div className="bg-white py-6 px-4 space-y-6 sm:p-6">
                                        <div>
                                            <h3 className="text-lg leading-6 font-medium text-gray-900">
                                                Student Information
                                            </h3>
                                            <p className="mt-1 text-sm text-gray-500">
                                                Use this form to create a new
                                                student.
                                            </p>
                                        </div>

                                        <div className="grid grid-cols-6 gap-6">
                                            <div className="col-span-6 sm:col-span-3">
                                                <label
                                                    htmlFor="name"
                                                    className="block text-sm font-medium text-gray-700"
                                                >
                                                    Name
                                                </label>
                                                <input
                                                    type="text"
                                                    value={data.name}
                                                    id="name"
                                                    onChange={(e) =>
                                                        setData(
                                                            "name",
                                                            e.target.value
                                                        )
                                                    }
                                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-red-900 focus:ring-red-500 focus:border-red-500 border-red-300"
                                                />
                                                {errors.name && (
                                                    <div className="text-red-900">
                                                        {errors.name}
                                                    </div>
                                                )}
                                            </div>

                                            <div className="col-span-6 sm:col-span-3">
                                                <label
                                                    htmlFor="email"
                                                    className="block text-sm font-medium text-gray-700"
                                                >
                                                    Email Address
                                                </label>
                                                <input
                                                    type="email"
                                                    value={data.email}
                                                    onChange={(e) =>
                                                        setData(
                                                            "email",
                                                            e.target.value
                                                        )
                                                    }
                                                    id="email"
                                                    autoComplete="email"
                                                    className={`mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                                                />
                                            </div>

                                            <div className="col-span-6 sm:col-span-3">
                                                <label
                                                    htmlFor="className_id"
                                                    className="block text-sm font-medium text-gray-700"
                                                >
                                                    Class
                                                </label>
                                                <select
                                                    id="class_id"
                                                    value={data.class_id}
                                                    onChange={(e) =>
                                                        setData(
                                                            "class_id",
                                                            e.target.value
                                                        )
                                                    }
                                                    className={`mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                                                >
                                                    <option value="">
                                                        Select a Class
                                                    </option>
                                                    {classes.data.map((c) => (
                                                        <option
                                                            key={c.id}
                                                            value={c.id}
                                                        >
                                                            {c.name}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>

                                            <div className="col-span-6 sm:col-span-3">
                                                <label
                                                    htmlFor="section_id"
                                                    className="block text-sm font-medium text-gray-700"
                                                >
                                                    Section
                                                </label>
                                                <select
                                                    id="section_id"
                                                    value={data.section_id}
                                                    onChange={(e) =>
                                                        setData(
                                                            "section_id",
                                                            e.target.value
                                                        )
                                                    }
                                                    className={`mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                                                >
                                                    <option value="">
                                                        Select a Section
                                                    </option>
                                                    {sections.map((s) => (
                                                        <option
                                                            key={s.id}
                                                            value={s.id}
                                                        >
                                                            {s.name}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                        <Link
                                            href={route("students.index")}
                                            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mr-4"
                                        >
                                            Cancel
                                        </Link>
                                        <button
                                            type="submit"
                                            className="bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                        >
                                            Save
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
