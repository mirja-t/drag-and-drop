import { AnimatePresence, motion } from 'framer-motion';

export function Modal({children, show, id=""}: {children: JSX.Element, show: boolean, id?: string | undefined}) {
    return (<AnimatePresence> { show && (
        <motion.div 
            id={id}
            className="modal"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}>
            { children }
        </motion.div>)}
    </AnimatePresence>)
}