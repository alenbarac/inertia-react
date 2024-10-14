import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Index({ posts }) {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Posts
                </h2>
            }
        >
            <Head title="Posts" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        {posts.data.map((post) => {
                            return (
                                <div
                                    key={post.id}
                                    className="p-6 border-b border-gray-200"
                                >
                                    <h2 className="text-lg font-semibold text-gray-800">
                                        {post.title}
                                    </h2>
                                    by{" "}
                                    <span className="text-sm">
                                        {post.user?.name || "Unknown Author"}
                                    </span>
                                    <p className="mt-2 text-sm text-gray-600">
                                        {post.body}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
