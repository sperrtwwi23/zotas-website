import React from 'react'
import Section from './Section'
import { useForm } from 'react-hook-form'

export default function Contact() {
  const { register, handleSubmit, reset } = useForm()
  const onSubmit = data => {
    alert('Danke für deine Anfrage!\nWir melden uns zeitnah.')
    reset()
    console.log('Anfrage:', data)
  }

  return (
      <div className="max-w-3xl mx-auto py-24">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-center">Unverbindlich anfragen</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="grid sm:grid-cols-2 gap-4 bg-white rounded-3xl p-6 shadow-soft">
          <input {...register('name', { required: true })} placeholder="Name" className="p-3 border rounded-xl" />
          <input {...register('team', { required: true })} placeholder="Team" className="p-3 border rounded-xl" />
          <input {...register('email', { required: true })} placeholder="E-Mail" type="email" className="p-3 border rounded-xl sm:col-span-2" />
          <select {...register('interest')} className="p-3 border rounded-xl sm:col-span-2">
            <option>Jerseys</option>
            <option>Hosen</option>
            <option>Teamwear</option>
            <option>Trainings-Equipment</option>
          </select>
          <textarea {...register('message')} placeholder="Nachricht" className="p-3 border rounded-xl sm:col-span-2 h-32" />
          <button type="submit" className="sm:col-span-2 rounded-2xl bg-primary text-white px-6 py-3 font-semibold shadow-soft hover:bg-secondary transition-colors">
            Absenden
          </button>
        </form>
        <p className="text-center text-sm text-slate-600 mt-3">Wir kommen innerhalb von 24–48h auf dich zu.</p>
      </div>
  )
}
