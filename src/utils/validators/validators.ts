export const required: ValidatorType = (value) => {
    if (value) return undefined
    return 'Required field'
}
export const maxLengthCreator = (maxLength: number):ValidatorType => (value) => {
    if (value.length < maxLength) return undefined
    return `max length is ${maxLength}`
}

export type ValidatorType = (value: string) => undefined | string


export const maxLength100 = maxLengthCreator(100)
