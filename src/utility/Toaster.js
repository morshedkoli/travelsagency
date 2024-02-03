import toast from "react-hot-toast";

export const successToast = ({ message }) => {
  toast.success(message); // Displays a success message
};

export const errorToast = ({ message }) => {
  toast.error(message); // Displays a success message
};
