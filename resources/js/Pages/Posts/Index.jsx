import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm, router, usePage } from "@inertiajs/react";

export default function Index({ auth, posts }) {
    const { data, setData, post, processing, errors, reset, clearErrors } =
        useForm({
            title: "",
            body: "",
        });

    function submit(e) {
        e.preventDefault();
        post(route("posts.store"), {
            onSuccess: () => {
                reset();
            },
        });
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Posts
                </h2>
            }
        >
            <Head title="Posts">
                <meta name="description" content="Posts Index" />
            </Head>

            <div className="py-12">
                <div className="max-w-3xl mx-auto sm:px-6 lg:px-8 space-y-3">
                    <form
                        onSubmit={submit}
                        className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-6"
                    >
                        <label htmlFor="title" className="sr-only">
                            Title
                        </label>
                        <input
                            className="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm w-full mb-3"
                            type="text"
                            name="title"
                            value={data.title}
                            onFocus={() => clearErrors("title")}
                            id="title"
                            placeholder="Title"
                            onChange={(e) => setData("title", e.target.value)}
                        />
                        {errors.title && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.title}
                            </p>
                        )}
                        <label htmlFor="body" className="sr-only">
                            Body
                        </label>

                        <textarea
                            onChange={(e) => setData("body", e.target.value)}
                            name="body"
                            id="body"
                            cols="30"
                            value={data.body}
                            onFocus={() => clearErrors("body")}
                            rows="5"
                            plsceholder="Body"
                            className="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm w-full"
                        ></textarea>
                        {errors.body && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.body}
                            </p>
                        )}
                        <button
                            type="submit"
                            className="mt-2 bg-gray-700 px-4 py-2 rounded-md font-medium text-white"
                        >
                            Post
                        </button>
                    </form>

                    {posts?.data.map((post) => {
                        return (
                            <div
                                key={post.id}
                                className="bg-white overflow-hidden shadow-sm sm:rounded-lg"
                            >
                                <div className="p-6 text-gray-900">
                                    <h4 className="text-xl">{post.title}</h4>
                                    <p className="mt-1">{post.body}</p>
                                    <div className="font-semibold">
                                        by{" "}
                                        <span className="text-sm">
                                            {post.user.name}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
