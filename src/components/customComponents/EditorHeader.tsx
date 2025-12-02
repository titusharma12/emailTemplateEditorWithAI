'use client'
import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'
import { Code, Monitor, Smartphone } from 'lucide-react'
import { useDeviceStore } from '@/store/Hook'

const EditorHeader = () => {
const { device, setDevice } = useDeviceStore();

console.log("Current device in EditorHeader:", device);
  return (
    <div className='p-4 shadow-sm flex items-center justify-between'>
        <div className='w-[50px]'>

       <svg 
          viewBox="0 0 400 400" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Background Circle */}
          <circle cx="200" cy="200" r="190" fill="#0f172a" stroke="#7f57f1" strokeWidth="3"/>
          
          {/* Hexagonal Badge */}
          <defs>
            <linearGradient id="techGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{stopColor:'#7f57f1', stopOpacity:1}} />
              <stop offset="100%" style={{stopColor:'#a78bfa', stopOpacity:1}} />
            </linearGradient>
          </defs>
          
          <polygon 
            points="200,80 260,115 260,185 200,220 140,185 140,115" 
            fill="url(#techGrad)" 
            opacity="0.15" 
            stroke="url(#techGrad)" 
            strokeWidth="2"
          />
          
          {/* Initials TS in modern style */}
          <g>
            {/* T */}
            <path 
              d="M 150 130 L 190 130 L 190 140 L 175 140 L 175 190 L 165 190 L 165 140 L 150 140 Z" 
              fill="#7f57f1" 
              stroke="#7f57f1" 
              strokeWidth="1"
            />
            
            {/* S */}
            <path 
              d="M 210 130 C 230 130 240 135 240 145 C 240 152 235 156 225 158 C 235 160 242 165 242 173 C 242 185 230 190 210 190 C 195 190 188 185 188 178 L 198 178 C 198 180 202 182 210 182 C 218 182 232 180 232 173 C 232 166 220 165 210 165 L 210 157 C 220 157 230 155 230 145 C 230 139 222 138 210 138 C 202 138 198 140 198 143 L 188 143 C 188 135 195 130 210 130 Z" 
              fill="#7f57f1" 
              stroke="#7f57f1" 
              strokeWidth="1"
            />
          </g>
          
          {/* Code brackets decoration */}
          <text x="120" y="165" fontFamily="'Courier New', monospace" fontSize="30" fill="#a78bfa" opacity="0.4">&lt;</text>
          <text x="265" y="165" fontFamily="'Courier New', monospace" fontSize="30" fill="#a78bfa" opacity="0.4">/&gt;</text>
          
          {/* Name */}
          <text 
            x="200" 
            y="250" 
            fontFamily="'Segoe UI', Arial, sans-serif" 
            fontSize="32" 
            fontWeight="700" 
            fill="#ffffff" 
            textAnchor="middle" 
            letterSpacing="2"
          >
            TITU SHARMA
          </text>
          
          {/* Subtitle */}
          <text 
            x="200" 
            y="275" 
            fontFamily="'Segoe UI', Arial, sans-serif" 
            fontSize="14" 
            fill="#94a3b8" 
            textAnchor="middle" 
            letterSpacing="3"
          >
            SOFTWARE DEVELOPER
          </text>
          
          {/* Binary code decoration */}
          <text 
            x="200" 
            y="305" 
            fontFamily="'Courier New', monospace" 
            fontSize="10" 
            fill="#7f57f1" 
            textAnchor="middle" 
            opacity="0.3"
          >
            01010100 01010011
          </text>
          
          {/* Corner accents */}
          <line x1="80" y1="120" x2="100" y2="120" stroke="#7f57f1" strokeWidth="2" opacity="0.6"/>
          <line x1="80" y1="120" x2="80" y2="140" stroke="#7f57f1" strokeWidth="2" opacity="0.6"/>
          
          <line x1="320" y1="120" x2="300" y2="120" stroke="#a78bfa" strokeWidth="2" opacity="0.6"/>
          <line x1="320" y1="120" x2="320" y2="140" stroke="#a78bfa" strokeWidth="2" opacity="0.6"/>
          
          <line x1="80" y1="280" x2="100" y2="280" stroke="#a78bfa" strokeWidth="2" opacity="0.6"/>
          <line x1="80" y1="280" x2="80" y2="260" stroke="#a78bfa" strokeWidth="2" opacity="0.6"/>
          
          <line x1="320" y1="280" x2="300" y2="280" stroke="#7f57f1" strokeWidth="2" opacity="0.6"/>
          <line x1="320" y1="280" x2="320" y2="260" stroke="#7f57f1" strokeWidth="2" opacity="0.6"/>
        </svg>
        </div>
        <div className='flex gap-3'>
            <Button variant={'ghost'} className={`hover:text-[#7f57f1] cursor-pointer ${device==='desktop'&&'bg-[#6d47e0]/10 text-[#7f57f1]'} hover:bg-[#6d47e0]/10`} onClick={()=>{setDevice('desktop')}}><Monitor/>Desktop</Button>
            <Button variant={'ghost'} className={`hover:text-[#7f57f1] cursor-pointer ${device==='mobile'&&'bg-[#6d47e0]/10 text-[#7f57f1]'} hover:bg-[#6d47e0]/10`} onClick={()=>{
              setDevice('mobile')
            }}><Smartphone/>Mobile</Button>
        </div>
        <div className='flex gap-3'>
            <Button variant={'ghost'} className='hover:text-[#7f57f1] cursor-pointer hover:bg-[#6d47e0]/10'><Code/></Button>
            <Button variant={'outline'}>Send 
            Test Mail
            </Button>
            <Button className='bg-[#7f57f1] hover:bg-[#6d47e0] text-white border-none rounded-md transition-colors'>Save Template</Button>
        </div>

    </div>
  )
}

export default EditorHeader