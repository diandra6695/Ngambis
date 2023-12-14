import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import AdminBlog from "./AdminBlog";
import { Button } from "@nextui-org/react";
import { Plus } from "@phosphor-icons/react";

export default function Dashboard(props) {
    console.log(props);
    return (
        <AuthenticatedLayout
            user={props.auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <Link href={route("blog.create")}>
                        <Button
                            className="my-5 bg-color-primary text-white"
                            endContent={<Plus />}
                        >
                            Tambah Artikel
                        </Button>
                    </Link>
                    <AdminBlog artikel={props.artikels} />
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
