interface HomeLayout {
    children: React.ReactNode
}

const HomeLayout = ({children}: HomeLayout) => {
    return (
        <>
        <p className={'p-4 text-2xl font-bold bg-blue-600'}>
            Home navBar
        </p>
        {children}
    </>
    )
}

export default HomeLayout