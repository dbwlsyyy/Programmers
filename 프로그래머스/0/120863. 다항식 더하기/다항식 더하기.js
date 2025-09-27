function solution(p) {
    if (p === '0') return '0'
    const arr1 = []
    const arr2 = []
    let res = ''
    
    p.split(' + ').map(a=> a.includes('x') ? arr1.push(a) : arr2.push(a))
    let xValue = arr1.map(a=> a.length === 1 ? 1 : Number(a.replace('x', ''))).reduce((a,b)=> a+b,0)
    let numValue = String(arr2.reduce((a,b)=> a + Number(b), 0))
    
    if (xValue === 0) {
        xValue = ''
    } else if (xValue === 1) {
        xValue = 'x'
    } else {
        xValue = String(xValue) + 'x'
    }
    
    xValue === '' ? res+= numValue : numValue === '0' ? res+= xValue : res+= xValue + ' + ' + numValue
    
    return res
}