import logoZebutech from "../assets/logo/zebutech-logo.png";

export default function Footer() {
  return (
    <div className="flex h-48 flex-col items-center justify-center gap-1 bg-indigo-300 text-center text-blue-900">
      <img
        src={logoZebutech}
        className="mb-4 h-16 sm:h-24"
        alt="Zebutech Logo"
      />
      <p>© 2020 - 2025 | CNIL: 1907464 | Mentions Légales</p>
      <p>
        Développé par{" "}
        <span className="font-bold">Sergio Fleurys Rakotozafy</span>{" "}
      </p>
    </div>
  );
}
