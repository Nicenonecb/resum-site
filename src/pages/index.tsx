
import BaseInfo from "@/components/my-resume/base-info"

// "h-full w-full bg-gray-700"
import '../styles/index.module.css'
export default function Index() {
  return (
    <section className="h-full w-full bg-gray-700 ">
      <section className="flex flex-col items-center   h-full ">
        <div className="mt-10 text-lg"> 王秉政</div>
        <BaseInfo></BaseInfo>

      </section>

    </section>
  )
}
