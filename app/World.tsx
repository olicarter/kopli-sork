'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { PersonSimpleRun, TreeEvergreen } from '@phosphor-icons/react'

export default function World() {
  const { scrollYProgress } = useScroll()
  const rotate = useTransform(scrollYProgress, [0, 1], [360, 0])

  return (
    <>
      <div className="fixed left-1/2 bottom-0 size-[200vw] rounded-full z-10 -translate-x-1/2 translate-y-[90%]">
        <div className="fixed flex justify-center size-full">
          <PersonSimpleRun
            className="-translate-y-[93%] z-10"
            size={32}
            style={{ fill: '#FDBA74' }}
            weight="fill"
          />
        </div>
      </div>
      <motion.div
        className="fixed left-1/2 bottom-0 size-[200vw] rounded-full"
        style={{ rotate, x: '-50%', y: '90%' }}
      >
        <div className="absolute flex justify-center size-full">
          <div className="-translate-y-[50vh]">
            <h1 className="font-extrabold text-6xl uppercase">Kopli Sörk</h1>
            <p className="text-xl">Running club</p>
          </div>
        </div>
        <div className="absolute flex justify-center size-full rotate-90">
          <div className="-translate-y-[50vh] flex flex-col">
            <h3 className="font-extrabold text-6xl uppercase">Events</h3>
            <a
              className="hover:underline text-xl"
              href="https://www.ahotu.com/event/narva-city-run"
              rel="noreferrer"
              target="_blank"
            >
              01.06 Narva Energy Run
            </a>
            <a
              className="hover:underline text-xl"
              href="https://www.ahotu.com/event/night-run-estonia-rakvere"
              rel="noreferrer"
              target="_blank"
            >
              01.06 Night Run Estonia (Rakvere)
            </a>
            <a
              className="hover:underline text-xl"
              href="https://www.ahotu.com/event/midsummer-challenge-vosu"
              rel="noreferrer"
              target="_blank"
            >
              30.06 Midsummer Challenge (Võsu)
            </a>
            <a
              className="hover:underline text-xl"
              href="https://www.ahotu.com/event/midsummer-challenge-tallinn"
              rel="noreferrer"
              target="_blank"
            >
              14.07 Midsummer Challenge (Tallinn)
            </a>
          </div>
        </div>
        {Array.from({ length: 60 }).map((_, i) => (
          <div
            className="absolute flex justify-center size-full"
            key={i}
            style={{ transform: `rotate(${Math.random() * 360}deg)` }}
          >
            <TreeEvergreen
              className="-translate-y-[95%]"
              size={128}
              style={{
                fill: ['#276749', '#22543d', '#1f4539', '#1c4033', '#183d2d'][
                  Math.floor(Math.random() * 5)
                ],
              }}
              weight="fill"
            />
          </div>
        ))}
        <div
          className="size-full rounded-full"
          style={{ backgroundColor: '#8B4513' }}
        />
      </motion.div>
    </>
  )
}
