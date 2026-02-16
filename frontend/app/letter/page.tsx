import Navbar from "@/src/components/navbar";
import Story from "@/src/services/story";

export default function StoryPage() {
    return (
        <div className="flex flex-col min-h-screen bg-pink-50">
            <Navbar />
            <main className="flex flex-1 justify-center items-center">
                <Story />
            </main>
        </div>
    );
}