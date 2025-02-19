import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function SubPage1() {
  return (
    <>
      <div className="mx-auto w-container max-w-full px-5 py-[110px] text-center lg:py-[150px]">
        <h1>Sub Page 1</h1>
        <Link href="/" passHref>
          <Button size="lg" className="h-12 text-base font-heading md:text-lg lg:h-14 lg:text-xl">
            Home
          </Button>
        </Link>
      </div>
    </>
  )
}
