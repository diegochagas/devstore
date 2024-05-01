'use client'

import { Skeleton } from '@/app/components/skeleton'
import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'

function Loading() {
  const searchParams = useSearchParams()
  const query = searchParams.get('q')

  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm">
        Results to: <span className="font-semibold">{query}</span>
      </p>

      <div className="grid grid-cols-3 gap-6">
        <Skeleton className="h-[260px]" />
        <Skeleton className="h-[260px]" />
        <Skeleton className="h-[260px]" />
        <Skeleton className="h-[260px]" />
        <Skeleton className="h-[260px]" />
        <Skeleton className="h-[260px]" />
      </div>
    </div>
  )
}

export default function SearchLoading() {
  return (
    <Suspense>
      <Loading />
    </Suspense>
  )
}
