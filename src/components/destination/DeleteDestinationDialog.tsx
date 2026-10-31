'use client'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";

const DeleteDestinationDialog = ({ id }:{id:string}) => {
    const router = useRouter();
  const handleDeleteDestination = async() => {
    const res = await fetch(`http://localhost:8000/destination/${id}`, {
     method: "DELETE",
    })
    await res.json();
    router.push('/destinations')
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger render={            <button className="border border-red-300 text-red-500 rounded-md px-3.5 py-1.5 text-xs font-medium hover:bg-red-50 flex items-center gap-1.5 transition-colors cursor-pointer">
              <Trash2 className="size-3.5" />
              Cancel
                      </button>}>
        Show Dialog
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleDeleteDestination}>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteDestinationDialog;
