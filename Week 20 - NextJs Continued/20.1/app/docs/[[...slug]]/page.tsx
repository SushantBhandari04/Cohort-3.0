export default async function Slug({params}:{
    params:{
        slug: string[]
    }
}){
    return <div>
        hello
        {JSON.stringify((await params).slug)}
    </div>
}