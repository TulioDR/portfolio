export default function ExpandIcon({ open }) {
   return (
      <span
         className={`material-icons transform duration-100 ${
            open ? "rotate-180" : ""
         }`}
      >
         expand_more
      </span>
   );
}
