import { Subject } from 'rxjs'

export const openInventorySubject$ = new Subject<boolean>()
export const mainLayoutSubject$ = new Subject<React.ReactNode>()
