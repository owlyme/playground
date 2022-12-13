
import type { NG } from "./types";
const fn1 = <T>(input: T) => input;
fn1(1)
fn1("s")
fn1({})

const f2 = <T, t>(input: T, arg: t) => input;
f2(1, 1)
f2("s", 4)
f2({}, [])

function f3<T>(cb: (input: T) => void) {
    return (a:T) => {
       cb(a)
    }
} 
f3((input:string) => console.log(input.length))
f3<string>((input) => console.log(input.length))
f3<number>((input) => console.log(input.length))


interface Box<T> {
    input: T
}

const a:Box<string> = {
    input: '213'
} 
const a1:Box<string> = {
    input: 1
} 

interface Nest<T> {
    value: T,
    next?: Nest<T>
}

const a2: Nest<string> = {
    value: "123",
    next: {
        value: "456"
    }
}

class C<T> {
    log(input: T) {
        console.log(input)
    }
    static Log<TT>(input: TT) {
        console.log(input)
    }
}

type Alias<T> = T | number

type Fn<T1, T2> = (input: T1) => T2
let  f5:Fn<number, string> 
// f5 = (input) => input + 1;



const f7 = <T1, T2=T1, T3=string>(a:T1, b:T2, c:T3) =>  console.log(a, b, c)
f7<number>(1, 2, "3")
f7<number>(1, "2", "3") 
interface widthLength {
    length: number
}

const f6= (arg: widthLength) => console.log(arg)
f6([])
f6("string")
f6(123)


type State = <T>(init: T) => [T, (arg:T) => T]
// type State<T> = (init: T) => [T, (arg:T) => T]
const useState:State = (init) => {
    return [init, arg => arg]
}

const [state, setState] = useState(1)
setState("string")


const [_state, _setState] = useState<{a:number, b?: number}>({a: 1})
_setState({a: 1, b: 2})

const f8 = <T extends widthLength>(input: T) => {}


const f9 = <T, KT extends keyof T>(arg:T, key:KT) => arg[key]
f9({a: 1}, 'a')
f9({a: 1}, 'b')

const f10 = <T, KT extends T>(arg:T, key:KT) => console.log(arg, key)
f10({a: 1}, 'a')
f10({a: 1}, {a: 1})


const p = async (input:number):Promise<string> => {
    return input.toString()
}

p(123).then(res => {
    console.log(res)
})

let ng:NG = 123
>>>>>>> cp
