
import BaseInfo from "@/components/my-resume/base-info"

// "h-full w-full bg-gray-700"
import '../styles/index.module.css'
export default function Index() {
  return (
    <section className="h-full w-full bg-gray-700 ">
        <section className="flex flex-col items-center   h-full ">
          <div className="mt-10"> 王秉政</div>
          <div>
            <BaseInfo></BaseInfo>
          </div>
        </section>

    </section>
  )
}
