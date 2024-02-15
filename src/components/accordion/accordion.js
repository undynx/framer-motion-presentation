import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion';

import './accordion.css'

const Accordion = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <article className="accordionContainer">
        <button className="accordionButton" onClick={() => setOpen((state) => !state)}>
            <h2>Lorem Ipsum</h2>
        </button>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: 'auto' }}
              exit={{ height: 0 }}
              style={{ overflow: 'hidden' }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type
              specimen book. It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was popularised in
              the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
              and more recently with desktop publishing software like Aldus PageMaker including
              versions of Lorem Ipsum.
            </motion.div>
          )}
        </AnimatePresence>
    </article>
  )
}

export { Accordion };