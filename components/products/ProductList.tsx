const ProductList = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="grid grid-cols-1 gap-4 grow overflow-y-scroll pb-4">{children}</div>
    )
}

export default ProductList;