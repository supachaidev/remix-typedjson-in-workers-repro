import { typedjson, useTypedLoaderData } from "remix-typedjson";

export async function loader() {
  return typedjson({ greeting: "hello", today: new Date() });
}

export default function Index() {
  const data = useTypedLoaderData<typeof loader>();

  return <div>{data.today.toDateString()}</div>;
}
