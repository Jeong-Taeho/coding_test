function solution(phone_book) {
    
    phone_book.sort()
    
    const result = phone_book.some((v, idx) => {
        return phone_book[idx + 1]?.indexOf(v) === 0
    })
    
    
    return !result
    
}