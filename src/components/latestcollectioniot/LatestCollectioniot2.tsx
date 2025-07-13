'use client';

import { ChevronDown, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';

export function LatestCollectioniot2() {
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [showAll, setShowAll] = useState(false);

  const itemsPerPage = 9;

  // Daftar gambar produk
  const productImages = [
    '/assets/images/project/smartlocker.png',
    '/assets/images/project/smartvending.png',
    '/assets/images/project/mkios.png',
    '/assets/images/project/layarinteractivelcd.png',
    '/assets/images/project/lcdstanding.png',
  ];

  // Nama-nama produk
  const productNames = [
    'Smart Locker',
    'Smart Vending Machine',
    'M Kios',
    'Layar Interactive LCD',
    'LCD Standing (Digital Signage)',
  ];

  // Link menuju detail masing-masing produk
  const productLinks = [
    '/detailsmartlocker',
    '/detailsmartvending',
    '/detailmkios',
    '/detaillayarinteractivelcd',
    '/detaillcdstanding',
  ];

  const allProducts = Array.from({ length: 5 }, (_, i) => ({
    id: i,
    name: productNames[i],
    price: 'Rp14.000.000',
    discountPrice: i % 5 === 0 ? 'Rp14.090.000' : null,
    image: productImages[i],
    link: productLinks[i],
  }));

  const filteredProductsAll = allProducts.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredProductsAll.length / itemsPerPage);
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const paginatedProducts = showAll
    ? filteredProductsAll
    : filteredProductsAll.slice(startIndex, endIndex);

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
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setPage(1);
              }}
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
          <button
            className="text-sm underline"
            onClick={() => setShowAll((prev) => !prev)}
          >
            {showAll ? 'Tampilkan Per Halaman' : 'Lihat Semua'}
          </button>
        </div>

        {/* Grid produk */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${page}-${showAll}-${searchTerm}`}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-2 gap-6 md:grid-cols-3"
          >
            {paginatedProducts.length > 0 ? (
              paginatedProducts.map((product) => (
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
          </motion.div>
        </AnimatePresence>

        {/* Pagination */}
        {!showAll && (
          <div className="flex flex-col items-center justify-between gap-4 pt-4 sm:flex-row">
            {/* Tombol Prev/Next di kiri */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                disabled={page === 1}
                className="rounded bg-neutral-700 px-3 py-1 text-sm disabled:opacity-50"
              >
                ← Prev
              </button>
              <button
                onClick={() =>
                  setPage((prev) => Math.min(prev + 1, totalPages))
                }
                disabled={page === totalPages}
                className="rounded bg-sky-400 px-3 py-1 text-sm text-white hover:bg-sky-500 disabled:opacity-50"
              >
                Next →
              </button>
            </div>

            {/* Input Page di kanan */}
            <div className="text-sm">
              Page{' '}
              <input
                type="number"
                min="1"
                max={totalPages}
                value={page}
                onChange={(e) => {
                  const newPage = Number(e.target.value);
                  if (newPage >= 1 && newPage <= totalPages) {
                    setPage(newPage);
                  }
                }}
                className="mx-1 w-10 rounded bg-white text-center text-black"
              />{' '}
              of {totalPages}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
