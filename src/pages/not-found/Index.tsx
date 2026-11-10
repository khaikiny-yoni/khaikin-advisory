import { Link } from "react-router-dom";

const NotFound = () => (
  <div className="mx-auto flex min-h-[60vh] max-w-2xl flex-col items-center justify-center px-5 py-24 text-center">
    <p className="font-display text-7xl font-black text-gold">404</p>
    <h1 className="mt-4 font-display text-3xl font-black text-navy">העמוד שחיפשתם לא נמצא</h1>
    <p className="mt-3 text-lg text-navy/75">ייתכן שהקישור ישן או שהכתובת השתנתה. אפשר להמשיך מהעמוד הראשי או ליצור קשר ישירות.</p>
    <div className="mt-8 flex flex-wrap justify-center gap-3">
      <Link to="/" className="rounded-full bg-navy px-7 py-3 font-bold text-ivory transition hover:bg-teal">לעמוד הראשי</Link>
      <Link to="/contact" className="rounded-full border border-navy px-7 py-3 font-bold text-navy transition hover:bg-navy hover:text-ivory">צור קשר</Link>
    </div>
  </div>
);

export default NotFound;
