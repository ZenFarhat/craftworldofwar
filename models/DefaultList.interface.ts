export interface ZonesModel {
  name: string
  imageUrl: string
  levelRequired: number
}

export interface DefaultListModel {
  zones: ZonesModel[]
}
