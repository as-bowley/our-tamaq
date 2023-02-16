export default function RecipeCard({ name, image, desc, link }) {
  return (
    <div className="flex flex-col bg-[#fff6f3] h-auto p-4 rounded-xl items-center justify-evenly drop-shadow-sm">
      <div className="h-auto mb-6">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={image} alt="" className="max-h-36" />
      </div>
      <h4 className="font-semibold">{name}</h4>
      <p>{desc}</p>
      <button></button>
    </div>
  );
}
