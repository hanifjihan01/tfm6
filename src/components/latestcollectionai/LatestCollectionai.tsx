'use client';

import { ChevronDown, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export function LatestCollectionai() {
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');

  // Daftar gambar produk
  const productImages = [
    '/assets/images/project/kt5.png',
    '/assets/images/project/alatai.png',
    '/assets/images/project/plank.png',
  ];

  // Nama-nama produk
  const productNames = [
    'Face Recognation Termal MVNT-86',
    'E-Gate single MVCM-2108-J Z',
    'Integrated Boom Gate With Smart AI Camera',
  ];

  // Link menuju detail masing-masing produk
  const productLinks = ['/detailfacerecog', '/detailegate', '/boomgate'];

  // Array semua produk
  const allProducts = Array.from({ length: 3 }, (_, i) => ({
    id: i,
    name: productNames[i],
    price: 'Rp14.000.000',
    discountPrice: i % 3 === 0 ? 'Rp14.090.000' : null,
    image: productImages[i],
    link: productLinks[i],
  }));

  // Filter produk berdasarkan kata kunci pencarian
  const filteredProducts = allProducts.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="bg-neutral-900 px-4 py-10 text-white md:px-10">
      <div className="mx-auto max-w-7xl space-y-6">
        {/* Header */}
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-xl font-extrabold md:text-2xl">
              Latest Collection
            </h2>
            <p className="mt-1 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio
              in et, lectus sit lorem id integer.
            </p>
          </div>

          {/* Search bar */}
          <div className="flex w-full items-center rounded-md border bg-white px-2 py-1 md:w-64">
            <input
              type="text"
              placeholder="Cari Produk"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 bg-transparent text-sm text-black outline-none placeholder:text-gray-500"
            />
            <ChevronRight className="text-black" size={18} />
          </div>
        </div>

        {/* Filter dan tombol lihat semua */}
        <div className="flex items-center justify-between">
          <button className="flex items-center gap-1 rounded border bg-neutral-800 px-3 py-1 text-sm">
            Category
            <ChevronDown size={16} />
          </button>
          <button className="text-sm underline">Lihat Semua</button>
        </div>

        {/* Grid produk */}
        <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div key={product.id} className="space-y-2">
                <div className="flex aspect-[3/2] items-center justify-center overflow-hidden rounded-lg bg-white">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={500}
                    height={333}
                    className="h-full w-full object-contain"
                  />
                </div>
                <Link href={product.link}>
                  <p className="cursor-pointer text-sm font-semibold text-sky-400 hover:underline">
                    {product.name}
                  </p>
                </Link>
                <div className="flex justify-between text-sm">
                  <span>{product.price}</span>
                  {product.discountPrice && (
                    <span className="text-gray-400 line-through">
                      {product.discountPrice}
                    </span>
                  )}
                </div>
              </div>
            ))
          ) : (
            <p className="col-span-3 text-center text-sm text-gray-400">
              Produk tidak ditemukan.
            </p>
          )}
        </div>

        {/* Pagination (dummy karena hanya 1 halaman) */}
        <div className="flex flex-col items-center justify-between gap-4 pt-4 sm:flex-row">
          <button className="rounded bg-sky-400 px-4 py-1 text-sm text-white hover:bg-sky-500">
            Next Page →
          </button>
          <div className="text-sm">
            Page{' '}
            <input
              type="text"
              value={page}
              onChange={(e) => setPage(Number(e.target.value))}
              className="mx-1 w-8 rounded bg-white text-center text-sm text-black"
            />{' '}
            of 1
          </div>
        </div>
      </div>
    </section>
  );
}
