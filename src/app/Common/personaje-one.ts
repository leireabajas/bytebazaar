export interface PersonajeONE {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: Origin;
 
  image: string;
  episode: string[];
 
  created: string;
}

export interface Origin {
  name: string;
  url: string;
}
