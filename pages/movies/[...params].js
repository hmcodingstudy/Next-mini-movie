import {useRouter} from "next/Router"

export default function Detail({params}) {
    const router = useRouter();
    const [title,id] = params || [];

    return (
      <h3>{title}</h3>
    )
  }

  export async function getServerSideProps({params:{params}}) {
    return {
      props: {
        params,
      },
    };
  }