/**
 * v0 by Vercel.
 * @see https://v0.dev/t/kNbyAUCzwOB
 */
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"

export default function Component() {
  return (
    <div key="1" className="flex flex-col min-h-screen bg-[#4c12a1] text-white font-sans">
      <header className="flex justify-between items-center border-b px-4 py-2">
        <Link href="#">
          <a className="flex items-center gap-2 text-lg font-semibold" href="#">
            <img
              alt="Currys logo"
              height="48"
              src="/placeholder.svg"
              style={{
                aspectRatio: "48/48",
                objectFit: "cover",
              }}
              width="48"
            />
            <span>Currys + Vercel</span>
          </a>
        </Link>
        <nav className="hidden md:flex gap-6 text-base">
          <Link href="#">
            <a href="#">Products</a>
          </Link>
          <Link href="#">
            <a href="#">About</a>
          </Link>
          <Link href="#">
            <a href="#">Contact</a>
          </Link>
        </nav>
        <form className="flex items-center gap-2">
          <Input className="border p-2 rounded" placeholder="Search products..." type="search" />
          <Button className="text-black" variant="outline">
            Search
          </Button>
        </form>
      </header>
      <main className="flex flex-col md:flex-row gap-4 p-4">
        <aside className="w-full md:w-64 border p-4 rounded">
          <h2 className="text-lg font-semibold mb-4">Categories</h2>
          <ul className="space-y-2">
            <li>
              <Button className="text-white" variant="link">
                Electronics
              </Button>
            </li>
            <li>
              <Button className="text-white" variant="link">
                Appliances
              </Button>
            </li>
            <li>
              <Button className="text-white" variant="link">
                Gaming
              </Button>
            </li>
          </ul>
        </aside>
        <section className="flex-1">
          <div className="flex justify-between items-center mb-4">
            <Select>
              <SelectTrigger className="text-black">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="price-asc">Price - Low to High</SelectItem>
                <SelectItem value="price-desc">Price - High to Low</SelectItem>
                <SelectItem value="newest">Newest</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div className="border p-4 rounded">
              <img
                alt="Vercel Branded Product 1"
                height="200"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "200/200",
                  objectFit: "cover",
                }}
                width="200"
              />
              <h3 className="text-lg font-semibold mt-2">Product Title</h3>
              <p className="text-gray-500">$99.99</p>
              <Button className="mt-2">Add to Cart</Button>
            </div>
            <div className="border p-4 rounded">
              <img
                alt="Vercel Branded Product 2"
                height="200"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "200/200",
                  objectFit: "cover",
                }}
                width="200"
              />
              <h3 className="text-lg font-semibold mt-2">Product Title</h3>
              <p className="text-gray-500">$99.99</p>
              <Button className="mt-2">Add to Cart</Button>
            </div>
            <div className="border p-4 rounded">
              <img
                alt="Vercel Branded Product 3"
                height="200"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "200/200",
                  objectFit: "cover",
                }}
                width="200"
              />
              <h3 className="text-lg font-semibold mt-2">Product Title</h3>
              <p className="text-gray-500">$99.99</p>
              <Button className="mt-2">Add to Cart</Button>
            </div>
            <div className="border p-4 rounded">
              <img
                alt="Vercel Branded Product 4"
                height="200"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "200/200",
                  objectFit: "cover",
                }}
                width="200"
              />
              <h3 className="text-lg font-semibold mt-2">Product Title</h3>
              <p className="text-gray-500">$99.99</p>
              <Button className="mt-2">Add to Cart</Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="mt-auto bg-[#4c12a1] text-white p-4">
        <nav className="flex gap-6 text-sm">
          <Link href="#">
            <a href="#">Terms & Conditions</a>
          </Link>
          <Link href="#">
            <a href="#">Privacy Policy</a>
          </Link>
        </nav>
        <p className="text-center text-sm mt-4">© 2023 Currys. All rights reserved.</p>
      </footer>
    </div>
  )
}
