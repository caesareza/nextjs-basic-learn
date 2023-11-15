import { useSelector } from "react-redux";

export default function Profile() {
  const profile = useSelector((state) => state.auth.value);

  return (
    <section>
      <h1 className="font-bold text-2xl">Profile</h1>
      <div>
        <div>{profile.firstName}</div>
      </div>
    </section>
  );
}
