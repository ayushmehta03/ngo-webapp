import { MessageCircle } from "lucide-react";

 export const WhatsAppButton = () => {
  const phoneNumber = "918210143030";
  const message = encodeURIComponent(`Hi, I am  and I'm interested in the pg room room.`);

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 z-50 bg-green-500 text-white p-3 rounded-full shadow-md"
    >
      <MessageCircle size={24} />
    </a>
  );
};
