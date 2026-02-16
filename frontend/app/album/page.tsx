import Navbar from "@/src/components/navbar";
import Album from "@/src/services/album";

export default function EventPage() {
    return (
        <div>
        <div className="flex flex-col min-h-screen  bg-rose-50">
            <Navbar />
            <main className="flex flex-1 justify-center items-center">
                <Album />
            </main>
        </div>
        </div>
    );
}