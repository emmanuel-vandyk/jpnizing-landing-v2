export interface PaginationOptions {
  page: number;
  itemsPerPage: number;
  total: number;
}

export interface PaginatedResult<T> {
  items: T[];
  currentPage: number;
  totalPages: number;
  totalItems: number;
  hasNext: boolean;
  hasPrev: boolean;
  itemsPerPage: number;
}

export interface CourseItem {
  title: string;
  description: string;
  features: string[];
  src: string;
  dataAos: string;
  dataAosDuration: string;
  level?: string;
  period?: string;
}
