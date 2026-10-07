c = open('D:/Projects/digidz_dev/src/app/page.tsx', 'r').read()

new_card = """
            {/* Desktop Apps */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-[#0a0a0a] border border-white/5 rounded-[32px] p-8 md:p-12 hover:border-purple-500/30 transition-colors group relative overflow-hidden md:col-span-2 lg:col-span-1"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/5 rounded-full blur-[80px] group-hover:bg-purple-500/10 transition-colors" />
              <div className="w-16 h-16 bg-purple-500/10 rounded-2xl flex items-center justify-center mb-8">
                <Code2 className="w-8 h-8 text-purple-500" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Custom Desktop Apps</h3>
              <p className="text-zinc-400 mb-8 line-clamp-3">High-performance, secure offline or cloud-synced desktop software for Windows and Mac tailored to your enterprise.</p>
              
              <ul className="space-y-4 mb-12">
                {['High Performance Offline Mode', 'Local Hardware Integration', 'Cross-Platform Windows/Mac', 'Secure Data Processing'].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-zinc-300">
                    <CheckCircle2 className="w-5 h-5 text-purple-500 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <a href="#contact" className="inline-flex items-center gap-2 text-purple-400 font-semibold hover:text-purple-300 transition-colors">
                Discuss Desktop Projects <ChevronRight className="w-4 h-4" />
              </a>
            </motion.div>
          </div>
"""
c = c.replace('            </motion.div>\n          </div>', '            </motion.div>\n' + new_card)
c = c.replace('<div className="grid md:grid-cols-2 gap-8">', '<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">')
open('D:/Projects/digidz_dev/src/app/page.tsx', 'w').write(c)
