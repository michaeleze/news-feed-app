import dynamic from "next/dynamic";
import { ModalProps } from "@/types/index";

const PersonalizeNewsFeedOptions = dynamic(() => import('@/components/PersonalizeFeedOptions/PersonalizeFeedOptions'), {
  loading: () => <p>Loading...</p>
})

const Modal: React.FC<ModalProps> = ({ subtitle }) => {
  return (
    <dialog id="my_modal_3" className="modal backdrop-blur-sm place-content-center">
      <div className="modal-box w-96">
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
        </form>
        <h3 className="font-bold text-lg text-center uppercase">{subtitle}</h3>
        <PersonalizeNewsFeedOptions />
      </div>
    </dialog>
  );
};

export default Modal;
