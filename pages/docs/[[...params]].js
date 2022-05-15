import Link from 'next/link';
import { useRouter } from 'next/router';

const DocPage= ()=> {
    const router = useRouter();
    const {params} = router.query;

    console.log(params);

    const handleToBack = ()=>{
        console.log("Going Back");
        // router.replace('/docs')
        router.push('/docs')
    }

    return (
        <>
            <Link href={'/'}>Home</Link>
            <h1>Hello world</h1>
            <button onClick={handleToBack}>Back To Doc Main Page</button>
        </>
    );
}

export default DocPage