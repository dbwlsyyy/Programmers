function solution(spell, dic) {
    const sortedSpell = spell.sort().join('')
    const isExist = dic.some(a => a.split('').sort().join('') === sortedSpell) 
    return isExist ? 1 : 2
    
}