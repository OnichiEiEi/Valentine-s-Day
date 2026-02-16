import Navbar from "@/src/components/navbar";
import TimelineSpecial from "@/src/services/timeline";

export default function TimelinePage() {
    return (
        <div className="flex flex-col min-h-screen bg-pink-50">
            <Navbar />
            <main className="flex flex-1 justify-center items-center">
                <TimelineSpecial />
            </main>
        </div>
    );
}