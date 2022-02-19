import { api } from "@boobs/api";

export function store(): string {
  console.log(api());

  return 'store';
}
